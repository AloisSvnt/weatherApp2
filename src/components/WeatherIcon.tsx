import { Icon } from '@iconify/react';
import WeatherIcons from '../config/WeatherIcons';

export const WeatherIcon = (props: {icon: string}) => {
  return (
    <Icon icon={WeatherIcons[props.icon]} className="w-full text-center" width="96" height="96"/>
  );
}