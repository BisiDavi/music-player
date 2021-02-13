import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  iconbtn: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '4px 7px',
    background: 'rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(20px)',
    borderRadius: '7px',
    width: '54.04px',
    color: 'white',
    border:'none',
    padding:'4px 15px',
    height: '24px',
    '& img': {
      margin: '2px 5px'
    }
  }
});

interface IButtonProps {
  text: string;
}

const IconButton = ({ text }: IButtonProps): JSX.Element => {
  const classes = useStyles();
  return (
    <button className={classes.iconbtn}>
      <Image src="/profile.png" width={25} height={25} alt="profile" />
      {text}
    </button>
  );
};

export default IconButton;
