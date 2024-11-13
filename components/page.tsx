import { ComponentMapper } from '@utils/component-mapper';

function PageComponent(props: any) {
  return (
    <>
      <ComponentMapper {...props} />
    </>
  );
}
export default PageComponent;
