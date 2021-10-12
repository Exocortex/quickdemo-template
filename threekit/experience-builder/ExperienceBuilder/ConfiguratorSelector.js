import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tag } from 'antd';
import { CatalogTableRow } from './experienceBuilder.styles';

export const ConfiguratorSelector = (props) => {
  const { creds, onContinue } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://${creds.threekitEnv}/api/products/export/json?orgId=${creds.orgId}&bearer_token=${creds.authToken}`
      );
      if (!response?.data) return;

      const configurators = response.data.reduce((output, el) => {
        if (
          el.product.type === 'item' &&
          !!el.product.attributes.length &&
          el.product.tags.includes('configurator')
        )
          output.push(el.product);
        return output;
      }, []);

      setData(configurators);
    })();
  }, []);

  const handleClick = (item) => {
    onContinue(item);
  };

  return (
    <div>
      {data.map((el, i) => (
        <CatalogTableRow onClick={() => handleClick(el)}>
          <div>{el.name}</div>
          <div>
            {el.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </div>
        </CatalogTableRow>
      ))}
    </div>
  );
};

export default ConfiguratorSelector;
