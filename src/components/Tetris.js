import React from 'react';

import { createStage } from '../gameHelpers';
// Components
import Stage from './stage';
import Display from './display';
import StartButton from './start-button';
import { StyledTetris } from './styles/StyledTetris';
import { StyledTetrisWrapper } from './styles/StyledTetris';

const Tetris = () => {
    <StyledTetrisWrapper>
        <StyledTetris>
        
        <Stage stage={createStage()}/>
        <aside>
            <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
            </div>
            <StartButton />
            
        </aside>
        </StyledTetris>
    </StyledTetrisWrapper>
}

export default Tetris;