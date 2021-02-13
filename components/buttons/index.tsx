import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    color: 'white',
    borderRadius: '7px',
    width: '63.52px',
    height: '23px',
    backgroundColor: '#FF0D0D',
    border:'none',
    padding:'4px 15px'
  }
});

interface IButtonProps {
  text: string;
}

const Button = (props: IButtonProps): JSX.Element => {
  const classes = useStyles(props);
  return <button className={classes.button}>{props.text}</button>;
};

export default Button;
