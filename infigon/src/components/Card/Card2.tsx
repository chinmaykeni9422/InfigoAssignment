import Carditem from '../CardItem/CardItem'

interface ButtonProps {
  title: string;
  onClick: () => void; // Ensure that onClick is a function that takes no parameters
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
}


function Card2 ({
  myData,
  title,
  onClick,
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <>
        <div className='flex mb-4 justify-center'>
            {myData.map((item) => <Carditem title={item.label} label={item.title} /> )}
        </div>
    </>
  )
}

export default Card2
    
