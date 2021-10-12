import React from 'react';
import { Wrapper, TitleWrapper, FormWrapper } from './singleProduct.styles';

import {
  Player,
  TwoCol,
  ThreekitProvider,
  Title,
  Description,
  Form,
} from '../../components';

const FORMS = {
  basic: 'basic',
};

const formsComponents = {
  [FORMS.basic]: Form,
};

export const SingleProductComponent = (props) => {
  const { form, attributeComponents } = Object.assign(
    { form: FORMS.basic, attributeComponents: {} },
    props
  );

  const FormComponent = formsComponents[form];

  return (
    <Wrapper>
      <TwoCol>
        <div>
          <Player />
        </div>
        <FormWrapper>
          <TitleWrapper>
            <Title />
            <Description />
          </TitleWrapper>
          <FormComponent attributeComponents={attributeComponents} />
        </FormWrapper>
      </TwoCol>
    </Wrapper>
  );
};

export const SingleProduct = (props) => {
  return (
    <ThreekitProvider config={props.config}>
      <SingleProductComponent {...props} />
    </ThreekitProvider>
  );
};

export default SingleProduct;
