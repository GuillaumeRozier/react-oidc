import React, { ComponentType, PropsWithChildren, useContext, useEffect, useMemo } from 'react';
import { AuthenticationContext } from '../oidcContext';
import { User } from 'oidc-client';

type WithOidcUserComponentProps = PropsWithChildren<{ oidcUser: User }>;

export const withOidcUser = (Component: ComponentType<WithOidcUserComponentProps>) => (props: WithOidcUserComponentProps) => {
  const { oidcUser } = useContext(AuthenticationContext);
  const { children } = props;
  return (
    <Component {...props} oidcUser={oidcUser}>
      {children}
    </Component>
  );
};
