import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: (width) => {
    color: 'white',
    borderRadius: '6px',
    height: '26px',
    backgroundColor: '#F7B263',
    border: 'none',
    padding: '4px 15px'
    width: width;
  }
});

interface IButtonProps {
  text: string;
  width: string;

}

const DropdownButton = ({text, width}: IButtonProps): JSX.Element => {
  const classes = useStyles({width});
  return <button className={classes.button}>
    {text}

    </button>;
};

export default DropdownButton;
