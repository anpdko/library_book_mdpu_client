import React, {useState} from 'react'
import styles from './RatingStars.module.scss'
import {Star, StarFill, StarHalf} from 'react-bootstrap-icons'

const RatingStars = ({rating = 0}) => {
   const [myRating, setMyRating] = useState(0)

   const clickStart = (num) => {
      setMyRating(num)
      createStars(num)
   }

   const createStars = () => {
      let num = Number(rating)
      let arrStarElements = [
         <i key={0}
            className={`${styles.star} 
               ${0 === myRating?styles.active:''}
            `} 
         ></i>
      ]
      for (let i = 1; i < 6; i++) {
         if(num > 0.8 ){
            arrStarElements.push(<StarFill 
               className={`${styles.star} 
                  ${i === myRating?styles.active:''}
               `} 
               onClick={()=>clickStart(i)}
               key={i}
            />)
         }
         else if(num > 0.2){
            arrStarElements.push(<StarHalf 
               className={`${styles.star} 
                  ${i === myRating?styles.active:''}
               `} 
               onClick={()=>clickStart(i)}
               key={i}
            />)
         }
         else{
            arrStarElements.push(<Star 
               className={`${styles.star} 
                  ${i === myRating?styles.active:''}
               `} 
               onClick={()=>clickStart(i)}
               key={i}
            />)
         }
         num -= 1
      }
   
      return arrStarElements
   }

   return (
      <div className={styles.stars}>
         {createStars()}
         <p>{rating} баллов</p>
      </div>
   );
};
export default RatingStars