
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','d7d'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','d12'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','344'),
  
  routes: [
{
  path: '/docs/api',
  component: ComponentCreator('/docs/api','fad'),
  exact: true,
},
{
  path: '/docs/caveats',
  component: ComponentCreator('/docs/caveats','4cd'),
  exact: true,
},
{
  path: '/docs/comparison',
  component: ComponentCreator('/docs/comparison','337'),
  exact: true,
},
{
  path: '/docs/debugging',
  component: ComponentCreator('/docs/debugging','923'),
  exact: true,
},
{
  path: '/docs/introduction',
  component: ComponentCreator('/docs/introduction','48d'),
  exact: true,
},
{
  path: '/docs/quick-start',
  component: ComponentCreator('/docs/quick-start','940'),
  exact: true,
},
{
  path: '/docs/recipes',
  component: ComponentCreator('/docs/recipes','a36'),
  exact: true,
},
{
  path: '/docs/tutorial-01',
  component: ComponentCreator('/docs/tutorial-01','ffc'),
  exact: true,
},
{
  path: '/docs/tutorial-02',
  component: ComponentCreator('/docs/tutorial-02','4e3'),
  exact: true,
},
{
  path: '/docs/tutorial-03',
  component: ComponentCreator('/docs/tutorial-03','0f9'),
  exact: true,
},
{
  path: '/docs/tutorial-04',
  component: ComponentCreator('/docs/tutorial-04','0f3'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
