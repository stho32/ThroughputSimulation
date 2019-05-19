# Throughput simulation

I lately created a prototype here : https://github.com/stho32/DasZiel-Spiel

Creative Code Jam "thomas" : https://github.com/stho32/TroughputSimulation/Source/thomas-viz.html

That got me interested to graphically simulate company structures. 
So I work on this project here. 

My long term target: 
  - [ ] configurable networks of "processing units" 
  - [ ] simulation of producing units like machines and people
  - [ ] there are "particle emitters" that simulate an incoming work load. There are several kinds of work that can come into the system. Actually they are dependent on each other, too. 
      - [ ] Someone buying a computer not only produces a delivery of a computer which has to be installed and such, it also generates an invoice that has to be processed by book keeping. 

My next todos: 
  - [ ] there are stock piles
    - [ ] stock piles show how much stock of something they have.
    - [ ] stock piles show their name
    - [ ] stock piles show their material name
  - [ ] there are processing units
    - [ ] stock piles can be connected via processing units

With that state one should be able to construct a network of measure points within a company and have a look at the stock piles at each position, which is the first and easiest way to find constraints within the system. 

The processing units jobs at this state is connecting the stock piles, so they float around their specific workers.

Todo later: 
  - [ ] Processing units have a maximum capacity 
  - [ ] Processing units have a minimum capacity 
  - [ ] Every stock pile has a material assigned to it
  - [ ] Processing units use multiple kinds of material in different amounts to produce something
  - [ ] Processing units have a certain chance to fail
  - [ ] There are "work emitters" which produce a certain material out of thin air. They simulate the borders of the company to the rest of the world. 
  - [ ] Stock piles can have a maximum capacity. When they reach their maximum capacity 
  - [ ] There is some kind of time simulation which runs the processing units in some way
  - [ ] Processing units take stock of connected stock piles and process them to other materials that are placed in another stock pile
  - [ ] Processing units have a statistical fluctuation in their behaviour.
  - [ ] instead of statically placing the elements a kind of force graph should be supported

The documentation is created here: https://stho32.github.io/ThroughputSimulation/Source/index.html
