import * as React from 'react';
import { Divider, Typography } from '@material-ui/core';

interface IProps {
  classes: any;
}

interface IDetail {
  detail: {
    name: string;
    content: string;
    link: string;
  };
}

const details = [
  {
    content: 'The multitool of editors.',
    link: 'https://code.visualstudio.com/',
    name: 'VsCode',
  },
  {
    content: 'The manual transmission of editors.',
    link: 'https://www.vim.org/',
    name: 'Vim',
  },
  {
    content: 'The better JavaScript.',
    link: 'https://www.typescriptlang.org/',
    name: 'TypeScript',
  },
  {
    content: 'The lego of front end framework.',
    link: 'https://reactjs.org/',
    name: 'React',
  },
  {
    content: 'JavaScript for the server.',
    link: 'https://nodejs.org/en/',
    name: 'Node',
  },
  {
    content: 'ORM for TypeScript.',
    link: 'https://www.typeorm.io/',
    name: 'TypeORM',
  },
];

const [
  vsCodeDetail,
  vimDetail,
  typeScriptDetail,
  reactDetail,
  nodeDetail,
  typeOrmDetail,
] = details;

const DetailGenerator = (props: IProps & IDetail) => {
  const {
    detail: { name, content, link },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h3" align="center" color="inherit">
        {name}
      </Typography>
      <Divider variant="middle" />
      <Typography>{content}</Typography>
      <Typography>
        <a target="__blank" href={link}>
          click here
        </a>{' '}
        for more info.
      </Typography>
    </React.Fragment>
  );
};

const VsCodeHoverDetail = (props: IProps) => (
  <DetailGenerator {...props} detail={vsCodeDetail} />
);

const VimHoverDetail = (props: IProps) => (
  <DetailGenerator {...props} detail={vimDetail} />
);

const TypeScriptHoverDetail = (props: IProps) => (
  <DetailGenerator {...props} detail={typeScriptDetail} />
);

const ReactHoverDetail = (props: IProps) => (
  <DetailGenerator {...props} detail={reactDetail} />
);

const NodeHoverDetail = (props: IProps) => (
  <DetailGenerator {...props} detail={nodeDetail} />
);

const TypeOrmHoverDetail = (props: IProps) => (
  <DetailGenerator {...props} detail={typeOrmDetail} />
);

export {
  VsCodeHoverDetail,
  VimHoverDetail,
  TypeScriptHoverDetail,
  ReactHoverDetail,
  NodeHoverDetail,
  TypeOrmHoverDetail,
};
