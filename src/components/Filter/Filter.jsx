import React from 'react'
import styles from './Filter.module.scss'
import {CheckboxApp, ButtonApp} from '../UI'
import WrapperFilter from './WrapperFilter'
import { JournalBookmarkFill } from 'react-bootstrap-icons'

const Filter = () => {
   return (
      <nav className={styles.filter}>
         <h2><JournalBookmarkFill/>Фільтр:</h2>

         <WrapperFilter title='Жанри'>
            <CheckboxApp id="1" name="пригоди"/>
            <CheckboxApp id="2" name="гумор"/>
            <CheckboxApp id="3" name="фентезі"/>
         </WrapperFilter>

         <WrapperFilter title='Категорії'>
            <CheckboxApp id="1" name='для підлітків'/>
            <CheckboxApp id="2" name="дитяча"/>
            <CheckboxApp id="3" name="сучасна проза"/>
         </WrapperFilter>
         
         <WrapperFilter title='Рік випуску'>
            <CheckboxApp id="1" name="2020"/>
            <CheckboxApp id="2" name="2018"/>
            <CheckboxApp id="3" name="2001"/>
            <CheckboxApp id="4" name="2000"/>
         </WrapperFilter>

         <WrapperFilter title='Мова'>
            <CheckboxApp id="1" name="українська"/>
            <CheckboxApp id="2" name="англійська"/>
            <CheckboxApp id="3" name="російська"/>
         </WrapperFilter>

         <ButtonApp>
            Фільтр
         </ButtonApp>
      </nav>
   );
};
export default Filter