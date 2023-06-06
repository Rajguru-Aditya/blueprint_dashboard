import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const CustomTable = () => {
    return (
        <div style={{ display: 'flex', overflowX: 'auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px', maxWidth: '100vw' }}>
                {/* 1st */}
                <TableContainer style={{ borderRadius: '10px', maxHeight: '250px', overflowY: 'auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} sx={{ backgroundColor: '#e0ecfc', height: '10px', padding: '8px' }}>
                                    <Typography variant="subtitle1" align="center">
                                        Sales Today
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ '&:hover': { backgroundColor: '#e0ecfc', height: '40px' } }}>
                                <TableCell sx={{ backgroundColor: '#F5F5F5', fontSize: '14px' }}>Invoices</TableCell>
                                <TableCell sx={{ backgroundColor: '#F5F5F5', fontSize: '14px' }}>Total</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:hover': { backgroundColor: '#e0ecfc' } }}>
                                <TableCell style={{ fontSize: '14px', padding: '8px' }}>0</TableCell>
                                <TableCell style={{ fontSize: '14px', padding: '8px', color: 'green' }}>₹0.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* 2nd */}
                <TableContainer style={{ borderRadius: '10px', maxHeight: '250px', overflowY: 'auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} sx={{ backgroundColor: '#e0ecfc', height: '10px', padding: '8px' }}>
                                    <Typography variant="subtitle1" align="center">
                                        Payments
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ '&:hover': { backgroundColor: '#e0ecfc', height: '40px'  } }}>
                                <TableCell sx={{ backgroundColor: '#F5F5F5', fontSize: '14px' }}>Receivables</TableCell>
                                <TableCell sx={{ backgroundColor: '#F5F5F5', fontSize: '14px' }}>Payables</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:hover': { backgroundColor: '#e0ecfc' } }}>
                                <TableCell style={{ fontSize: '14px', color: 'green', padding: '8px' }}>₹0.00</TableCell>
                                <TableCell style={{ fontSize: '14px', color: 'blue', padding: '8px' }}>₹0.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* 3rd */}
                <TableContainer style={{ borderRadius: '10px', maxHeight: '250px', overflowY: 'auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} sx={{ backgroundColor: '#e0ecfc', height: '10px', padding: '8px' }}>
                                    <Typography variant="subtitle1" align="center">
                                        Inventory
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ '&:hover': { backgroundColor: '#e0ecfc', height: '40px' } }}>
                                <TableCell sx={{ backgroundColor: '#F5F5F5', fontSize: '14px' }}>Low stock</TableCell>
                                <TableCell sx={{ backgroundColor: '#F5F5F5', fontSize: '14px' }}>Out of stock</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:hover': { backgroundColor: '#e0ecfc' } }}>
                                <TableCell style={{ fontSize: '14px', color: 'red', padding: '8px' }}>0</TableCell>
                                <TableCell style={{ fontSize: '14px', color: 'red', padding: '8px' }}>0</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* 4th */}
                <TableContainer style={{ borderRadius: '10px', maxHeight: '250px', overflowY: 'auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} sx={{ backgroundColor: '#e0ecfc', height: '10px', padding: '8px' }}>
                                    <Typography variant="subtitle1" align="center">
                                        Expenses
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ '&:hover': { backgroundColor: '#e0ecfc', height: '40px' } }}>
                                <TableCell sx={{ backgroundColor: '#F5F5F5', fontSize: '14px' }}>Today</TableCell>
                                <TableCell sx={{ backgroundColor: '#F5F5F5', fontSize: '14px' }}>Month</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:hover': { backgroundColor: '#e0ecfc' } }}>
                                <TableCell style={{ fontSize: '14px', color: 'red', padding: '8px' }}>₹0.00</TableCell>
                                <TableCell style={{ fontSize: '14px', color: 'red', padding: '8px' }}>₹0.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default CustomTable;
