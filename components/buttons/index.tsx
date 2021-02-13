import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    backgroundColor: props => props.bg,
    color: 'white',
    borderRadius: '10px'
  }
});

interface IButtonProps {
  bg: string;
  text: string;
}

const Button = (props: IButtonProps): JSX.Element => {
  const classes = useStyles(props);
  return <button className={classes.button}>{props.text}</button>;
};

export default Button;
