import * as React from 'react'
import "../MasterPageRow2.scss";
import "./ImageSlider.scss"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "@pnp/sp/profiles";
import "@pnp/sp/lists";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";

export interface ISliderProps {
  data: any
}
const ImageSliders = (props: ISliderProps) => {
  const [loading, setLoading] = React.useState(false);
   console.log(props)
  let arr: any[] = []
  arr = props.data;
   console.log(arr)
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);

  }, [])
  if (loading) {
    return (
      <div className='whiteScreen'>
      </div>)
  }
  else {
    return (
      <>  
        <Slide>
          {props.data && props.data.map((x: any) => {
            return (<div className='each-slide'>
              <img src={x} /></div>)
          })}
        </Slide>
      </>
    )
  }
}
export default ImageSliders;