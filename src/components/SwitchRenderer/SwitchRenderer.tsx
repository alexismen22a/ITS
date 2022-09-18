interface SwitchRendererProps {
  children: JSX.Element | Array<JSX.Element>;
  validate: string | null;
}

export default function SwitchRenderer({
  children,
  validate,
}: SwitchRendererProps): JSX.Element | null {
  if (!validate) return null;

  if (!Array.isArray(children)) {
    if (!children.props?.case)
      throw new Error(`The element "${children.type}" requires a "case" attribute`);

    if (children.props.case !== validate) return null;
    return children;
  } else {
    const erChild = children.find?.((child) => !child.props?.case);
    if (erChild) throw new Error(`The element ${erChild.type} require attribute "case"`);

    const validChild = children.find((child) => child.props.case === validate);
    if (!validChild) return null;
    return validChild;
  }
}
