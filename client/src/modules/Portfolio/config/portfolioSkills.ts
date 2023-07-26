import { ReactComponent as DgangoIcon } from '../assets/skills/back/django.svg';
import { ReactComponent as ExpressIcon } from '../assets/skills/back/express.svg';
import { ReactComponent as Graphqlcon } from '../assets/skills/back/graphql.svg';
import { ReactComponent as MongodbIcon } from '../assets/skills/back/mongodb.svg';
import { ReactComponent as MysqlIcon } from '../assets/skills/back/mysql.svg';
import { ReactComponent as SolidityIcon } from '../assets/skills/back/solidity.svg';
import { ReactComponent as NodejsIcon } from '../assets/skills/back/nodejs.svg';
import { ReactComponent as PostgresIcon } from '../assets/skills/back/postgres.svg';
import { ReactComponent as PythonIcon } from '../assets/skills/back/python.svg';
import { ReactComponent as ReddisIcon } from '../assets/skills/back/reddis.svg';
import { ReactComponent as RestIcon } from '../assets/skills/back/rest.svg';
import { ReactComponent as SocketioIcon } from '../assets/skills/back/socketio.svg';
import { ReactComponent as CssIcon } from '../assets/skills/front/css.svg';
import { ReactComponent as HtmlIcon } from '../assets/skills/front/html.svg';
import { ReactComponent as JsIcon } from '../assets/skills/front/js.svg';
import { ReactComponent as NextJsIcon } from '../assets/skills/front/nextjs.svg';
import { ReactComponent as ReactIcon } from '../assets/skills/front/react.svg';
import { ReactComponent as ZustandIcon } from '../assets/skills/front/zustand.svg';
import { ReactComponent as RecoilJsIcon } from '../assets/skills/front/recoiljs.svg';
import { ReactComponent as ReduxIcon } from '../assets/skills/front/redux.svg';
import { ReactComponent as SassIcon } from '../assets/skills/front/sass.svg';
import { ReactComponent as StyledIcon } from '../assets/skills/front/styled.svg';
import { ReactComponent as TailwindCssIcon } from '../assets/skills/front/tailwindcss.svg';
import { ReactComponent as TsIcon } from '../assets/skills/front/ts.svg';
import { ReactComponent as NginxIcon } from '../assets/skills/misc/nginx.svg';
import { ReactComponent as DockerIcon } from '../assets/skills/misc/docker.svg';
import { ReactComponent as GitIcon } from '../assets/skills/misc/git.svg';
import React from 'react';

export interface ISkill {
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    name: string
}

export type SkillCategory = 'frontend' | 'backend' | 'misc'

const backendIcons: ISkill[] = [
    { icon: NodejsIcon, name: 'Node.js' },
    { icon: ExpressIcon, name: 'Express' },
    { icon: SocketioIcon, name: 'Socket.io' },
    { icon: PythonIcon, name: 'Python' },
    { icon: DgangoIcon, name: 'Django' },
    { icon: MysqlIcon, name: 'MySQL' },
    { icon: PostgresIcon, name: 'PostgreSQL' },
    { icon: MongodbIcon, name: 'MongoDB' },
    { icon: RestIcon, name: 'REST' },
    { icon: Graphqlcon, name: 'GraphQL' },
    { icon: ReddisIcon, name: 'Redis' },
    { icon: SolidityIcon, name: 'Solidity' }
];

const frontendIcons: ISkill[] = [
    { icon: HtmlIcon, name: 'HTML' },
    { icon: CssIcon, name: 'CSS' },
    { icon: JsIcon, name: 'JavaScript' },
    { icon: TsIcon, name: 'TypeScript' },
    { icon: ReactIcon, name: 'React' },
    { icon: NextJsIcon, name: 'Next.js' },
    { icon: ReduxIcon, name: 'Redux' },
    { icon: ZustandIcon, name: 'Zustand' },
    { icon: RecoilJsIcon, name: 'Recoil.js' },
    { icon: StyledIcon, name: 'Styled Components' },
    { icon: TailwindCssIcon, name: 'Tailwind CSS' },
    { icon: SassIcon, name: 'Sass' }
];

const miscIcons: ISkill[] = [
    { icon: NginxIcon, name: 'Nginx' },
    { icon: DockerIcon, name: 'Docker' },
    { icon: GitIcon, name: 'Git' }
];

/**
 My skills
 */
export const skills: Record<SkillCategory, ISkill[]> = {
    'frontend': frontendIcons,
    'backend': backendIcons,
    'misc': miscIcons
};


interface ICategory {
    id: SkillCategory;
    name: string;
}

export const categories: ICategory[] = [
    {
        id: 'frontend',
        name: 'Frontend'
    },
    {
        id: 'backend',
        name: 'Backend'
    },
    {
        id: 'misc',
        name: 'Ещё'
    }
];