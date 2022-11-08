import { Component } from 'react';
import DeveloperLewis from './DeveloperLewis';
import DeveloperSteven from './DeveloperSteven';
import DeveloperTrace from './DeveloperTrace';
import DeveloperZoe from './DeveloperZoe';
import styles from '../stylesheets/About.module.css';

class Developers extends Component {
  render() {
    return (
      <>
      <div classname={styles.devColumn1}>
        <DeveloperLewis />
        <DeveloperSteven />
        </div>
        <div classname={styles.devColumn2}>
        <DeveloperTrace />
        <DeveloperZoe />
        </div>
      </>
    )
  }
}

export default Developers;
