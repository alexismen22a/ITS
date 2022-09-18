import { createPortal } from 'react-dom';

interface PortalProps {
  to: string;
  children: JSX.Element | Array<JSX.Element>;
}

function Portal({ children, to }: PortalProps): JSX.Element {
  return createPortal(children, document.querySelector(to) as HTMLElement);
}

export default Portal;
