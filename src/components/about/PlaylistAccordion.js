import React, { Component } from 'react';
import styles from '../stylesheets/About.module.css'
import Accordion from 'react-bootstrap/Accordion';


export default class AboutBlank extends Component {
  render() {
    return (
      <div className={styles['playlist-accordion']}>
        <Accordion variant='success'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Lewis Playlist</Accordion.Header>
            <Accordion.Body>
              Playlist goes here
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Steven Playlist</Accordion.Header>
            <Accordion.Body>
              Playlist goes here
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Trace Playlist</Accordion.Header>
            <Accordion.Body>
              Mavericks - ikabodVEINS,
              Cannabliss - Baker Ya Maker,
              Ditty - Freddie Dredd,
              Paper - Nell,
              WXXD16 - Blokka $oLO,
              Neva Slippin' - Baker Ya Maker,
              Wrath - Freddie Dredd,
              Kill'em All - Baker Ya Maker,
              Maschenny - Purely Blue,
              Snake - Freddie Dredd,
              Hxly Ghx$t - Blokka $oLO,
              HH$mL - Blokka $oLO,
              When I Touch - Baker Ya Maker,
              CH1RP - Blokka $oLO,
              Sumn Hard - Doddy Gatz,
              Cash In Cash Out - Pharrell Williams,
              Cold World - Iceberg Black,
              MXB - Blokka $oLO,
              Killin' On Demand - Freddie Dredd,
              Hero - Yvncc,
              Cry Of Fear - Baker Ya Maker,
              Greed - Freddie Dredd,
              PXW6R - Blokka $oLO,
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Zoe Playlist</Accordion.Header>
            <Accordion.Body>
            1. Everything Is Alright
Motion City Soundtrack

2. The Permanent Rain
The Dangerous Summer

3. Eastbound & Down
WSTR

4. Baby Blue
Grayscale

5. Bad Idea
Motion City Soundtrack

6. Pulp Fiction
Motion City Soundtrack

7. Populace In Two
From First To Last

8. Timelines
Motion City Soundtrack

9. Floating Down The River
Motion City Soundtrack

10. Lonely Smiles
WSTR

11. Look at the Sky
Porter Robinson

12. Heavy Boots
Motion City Soundtrack

13. Atlantic
Grayscale

14. Featherweight
WSTR

15. My Favorite Accident
Motion City Soundtrack

16. The Sound of Reverie
The Maine

17. Radio Up
Letter Kills

18. Dirty Bombs
Grayscale

19. In Bloom
Neck Deep

20. L.G. FUAD
Motion City Soundtrack

21. All The Rage
WSTR

22. The Future Freaks Me Out
Motion City Soundtrack

23. Time of Our Lives
Pitbull

24. Memory
Sugarcult

25. Collapse
Saosin
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        );
      </div>
    )
  };
}
