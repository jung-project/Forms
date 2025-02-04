import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField1 from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import '@component/css/component.css'

export default function TextField(){
    return (
        <div>
            <TextField1
                  fullWidth
                  label="질문"
                  size="small"
                  margin="normal"
              />

            <TextField1
                  fullWidth
                    disabled
                    label="질문에 답변 하세요"
                    variant="filled"
                    size="small"
                    margin="normal"
              />
            <Divider />
            <div style={{ textAlign: "end" }}>
                <FormControlLabel control={<Switch />} label="긴 답변" />
                <FormControlLabel control={<Switch />} label="필수" />
            </div>
        </div>
    );
}