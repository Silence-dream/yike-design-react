import { existsSync } from 'fs';
import { basename, resolve } from 'path';
import { notFound } from 'next/navigation';
import { getComponents, getDemos } from '../../utils';
import { COMPONENT_DEMOS_DIR } from '@/utils/constants';
import PreviewerContainer from '@/components/demo/PreviewerContainer';

interface PageProps {
  params: {
    component: string;
    demo: string;
  };
}

export const generateMetadata = ({ params }: PageProps) => {
  return {
    title: `${params.demo} / ${params.component}`,
  };
};

export const generateStaticParams = async () => {
  const components = await getComponents();

  return (
    await Promise.all(
      components.map(async item => {
        const demos = await getDemos(item.name);
        return demos.map(demo => ({
          component: item.name,
          demo: basename(demo.name, '.tsx'),
        }));
      })
    )
  ).flat();
};

const Page = async ({ params: { component, demo } }: PageProps) => {
  if (!existsSync(resolve(COMPONENT_DEMOS_DIR, component, `${demo}.tsx`))) {
    notFound();
  }

  return (
    <PreviewerContainer
      demo={demo}
      component={component}
    />
  );
};

export default Page;
