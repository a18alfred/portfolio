import { IconName } from '../../../config/osIcons';

type Entry = {
    icon: IconName,
    label: string
}

/**
 * array of entries for start menu
 */
export const entries: Entry[] = [
    {
        icon: 'dirExecIcon',
        label: 'Программы'
    },
    {
        icon: 'settingsIcon',
        label: 'Настройки'
    },
    {
        icon: 'searchIcon',
        label: 'Поиск'
    },
    {
        icon: 'applicationHourglassIcon',
        label: 'Выполнить'
    }
];