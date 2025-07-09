import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { IoAlertCircleSharp } from "react-icons/io5";
import './DragDropBoard.css';

const initialData = {
  columns: {
    naoLidas: {
      name: 'Não Lidas',
      color: '#E53935',
      items: [
        { id: '1', name: 'Caio' },
        { id: '2', name: 'Beatriz' },
      ],
    },
    respondeu: {
      name: 'Respondeu',
      color: '#039BE5',
      items: [{ id: '3', name: 'Natália' }],
    },
    naoRespondeu: {
      name: 'Não respondeu',
      color: '#212121',
      items: [
        { id: '4', name: 'Artur' },
        { id: '5', name: 'Henrique' },
        { id: '6', name: 'Jéssica' },
      ],
    },
    concluidas: {
      name: 'Concluídas',
      color: '#43A047',
      items: [
        { id: '7', name: 'José' },
        { id: '8', name: 'Maria' },
      ],
    },
    aguardando: {
      name: 'Aguardando',
      color: '#1A237E',
      items: [],
    },
  },
};

const DragDropBoard = () => {
  const [columns, setColumns] = useState(initialData.columns);
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false);

  const handleAuxClick = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setVisible(true);
    console.log('xxx', e.target.id)
  }

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    const sourceItems = [...sourceCol.items];
    const destItems = [...destCol.items];

    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          items: sourceItems,
        },
      });
    } else {
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destCol,
          items: destItems,
        },
      });
    }
  };

  return (
    <div className="board-container" onClick={() => setVisible(false)}>
      {visible && (
        <ul
          className='menu-aux-list'
          style={{ top: position.y, left: position.x }}
        >
          <button onClick={() => console.log('option 1')} className='menu-aux'>
            Opção 1
          </button>
          <button onClick={() => console.log('option 2')} className='menu-aux'>
            Opção 2
          </button>
          <button onClick={() => console.log('option 3')} className='menu-aux'>
            Opção 3
          </button>
        </ul>
      )}
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([columnId, column]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="column"
              >
                <h2 className="column-title">
                  {column.name}
                  <span
                    className="column-dot"
                    style={{ backgroundColor: column.color }}
                  ></span>
                </h2>
                {column.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        id={item.id}
                        onContextMenu={handleAuxClick}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="card"
                        style={{
                          borderLeft: `4px solid ${column.color}`,
                          ...provided.draggableProps.style,
                        }}
                      >
                        <div id={item.id} style={{ display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column', flex: '1' }}>
                          <p id={item.id} className="card-title">{item.name}</p>
                          <p id={item.id} className="card-date">23/03/2025</p>
                        </div>

                        <div id={item.id} style={{ display: 'flex', justifyContent: 'end', alignItems: 'end', flex: '1' }}>
                          <IoAlertCircleSharp className='drag-card-icon' style={{ color: column.color }} />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}

export default DragDropBoard;