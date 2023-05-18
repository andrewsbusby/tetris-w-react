import React from 'react';

import { createStage } from '../gameHelpers';
// Components
import Stage from './stage';
import Display from './display';
import StartButton from './start-button';

const Tetris = () => {
    <div>
        <Stage stage={createStage()}/>
        <aside>
            <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
            </div>
            <StartButton />
            
        </aside>

    </div>
}

export default Tetris;