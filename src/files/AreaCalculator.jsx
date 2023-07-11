import React, { Component } from 'react';

class AreaCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      data: [],
      roomType: 'Bedroom'
    };
  }

  handleAddRoom = () => {
    const room = {
      name: '',
      lengthFeet: 0,
      lengthInches: 0,
      breathFeet: 0,
      breathInches: 0
    };
    this.setState({
      rooms: [...this.state.rooms, room]
    });
  }

  calculateArea = (room) => {
    const length = room.lengthFeet + room.lengthInches / 12;
    const breath = room.breathFeet + room.breathInches / 12;
    const area = length * breath;
    this.setState({
      data: [...this.state.data, {
        label: room.name,
        value: area
      }]
    });
  }

  handleRoomTypeChange = (event) => {
    this.setState({
      roomType: event.target.value
    });
  }

  render() {
    const { rooms, data, roomType } = this.state;
    const totalArea = rooms.reduce((accumulator, room) => accumulator + room.lengthFeet * room.breathFeet, 0);
    return (
      <div>
        <h1>Area Calculator</h1>
        <select
          name="roomType"
          value={roomType}
          onChange={this.handleRoomTypeChange}
        >
          <option value="Bedroom">Bedroom</option>
          <option value="Living">Living</option>
          <option value="Balcony">Balcony</option>
          <option value="Dining">Dining</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Passage">Passage</option>
          <option value="Garden">Garden</option>
          <option value="Bathroom">Bathroom</option>
          <option value="Staircase">Staircase</option>
        </select>
        <input
          type="text"
          placeholder="Room Name"
          onChange={(event) => this.setState({room: {...this.state.room, name: event.target.value}})}
        />
        <input
          type="number"
          placeholder="Length (feet)"
          onChange={(event) => this.setState({room: {...this.state.room, lengthFeet: event.target.value}})}
        />
        <input
          type="number"
          placeholder="Length (inches)"
          onChange={(event) => this.setState({room: {...this.state.room, lengthInches: event.target.value}})}
        />
        <input
          type="number"
          placeholder="Breath (feet)"
          onChange={(event) => this.setState({room: {...this.state.room, breathFeet: event.target.value}})}
        /><br/>
        <input
          type="number"
          placeholder="Breath (inches)"
          onChange={(event) => this.setState({room: {...this.state.room, breathInches: event.target.value}})}
        />
        <button onClick={this.handleAddRoom}>Add Room</button>
        
        <table>
          <thead>
            <tr>
              <th>Room Name</th>
              <th>Total Area (feet)</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={index}>
                <td>{roomType}</td>
                <td>{data}</td>
              </tr>
            ) ) }
            </tbody>
           </table>
           </div>
    );
  }
}    
        

export default AreaCalculator ;