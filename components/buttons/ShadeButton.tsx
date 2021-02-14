import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  iconbtn: {
    display: 'flex',
    justifyContent: 'center',
    padding: '4px 7px',
    background: '#F7B263',
    backdropFilter: 'blur(20px)',
    borderRadius: '6px',
    width: '175px',
    alignItems: 'center',
    color: 'white',
    border: 'none',
    height: '28px',
    '& img': {
      margin: '2px 5px'
    }
  },
  icon: {
    marginRight: '10px'
  }
});

interface IButtonProps {
  text: string;
  icon: string;
}

const ShadeButton = (props: IButtonProps): JSX.Element => {
  const classes = useStyles(props);
  return (
    <button className={classes.iconbtn}>
      {props.text}
      <Image
        src={props.icon}
        className={classes.icon}
        width={20}
        height={20}
        alt="download"
      />
    </button>
  );
};

export default ShadeButton;
