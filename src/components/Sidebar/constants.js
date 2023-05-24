import { ReactComponent as HomeIcon } from '../../assets/iconsSidebar/home.svg';
import { ReactComponent as CoursesIcon } from '../../assets/iconsSidebar/courses.svg';
import { ReactComponent as LibrariesIcon } from '../../assets/iconsSidebar/libraries.svg';
import { ReactComponent as StatisticsIcon } from '../../assets/iconsSidebar/statistics.svg';
import { ReactComponent as UsersGuidelineIcon } from '../../assets/iconsSidebar/usersGuideline.svg';

export const PAGES = [
  { id: 1, title: 'Home', icon: <HomeIcon /> },
  {
    id: 2,
    title: 'Courses',
    icon: <CoursesIcon />,
  },
  {
    id: 3,
    title: 'Libraries',
    icon: <LibrariesIcon />,
  },
  {
    id: 4,
    title: 'Statistics',
    icon: <StatisticsIcon />,
  },
  {
    id: 5,
    title: 'Users Guideline',
    icon: <UsersGuidelineIcon />,
  },
];
