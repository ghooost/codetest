type navLinkClassSelectorFnParams = {
    isActive: boolean;
  };

export const navLinkClassSelector = (className: string, classNameActive: string) => ({ isActive }: navLinkClassSelectorFnParams) => `${className} ${isActive ? classNameActive : ''}`;
