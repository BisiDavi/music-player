import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    color: 'white',
    borderRadius: '6px',
    borderBottom: 'none !important',
    height: '26px',
    backgroundColor: '#F7B263',
    border: 'none',
    padding: '4px 15px',
    width: '140px'
  }
});

interface IButtonProps {
  text: string;
  options: string[];
}

const DropdownButton = ({ text, options }: IButtonProps): JSX.Element => {
  const classes = useStyles();
  const [quality, setQuality] = useState('64KBPS');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuality(event.target.value as string);
  };
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      className={classes.button}
      onChange={handleChange}
      value={quality}
    >
      {options.map(item => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export default DropdownButton;
