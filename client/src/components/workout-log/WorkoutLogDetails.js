import React from "react";
import {
    TableContainer, Paper, Table,
    TableHead, TableRow, TableCell, TableBody,
    Collapse, Box, Typography,
    IconButton,
} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <TableRow key={row._id}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="center">
                    {row.workoutName}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Workout Logger
                            </Typography>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Date</strong></TableCell>
                                        <TableCell><strong>Reps</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        row.data.map((elem) => (
                                            <TableRow key={elem.repId}>
                                                <TableCell>{elem.date}</TableCell>
                                                <TableCell>{elem.reps}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

const WorkoutLogDetails = ({ workoutLogs }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="Workout Log Table">
                <TableHead>
                    <TableRow >
                        <TableCell />
                        <TableCell align="center">
                            <strong>WorkoutName</strong>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        workoutLogs.map((row) => (
                            <Row key={row._id} row={row} />
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default WorkoutLogDetails;
