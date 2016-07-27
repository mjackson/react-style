import React from 'react'
import Style from './Style'

export const Inline = (props) =>
  <Style {...props} display="inline"/>

export const Block = (props) =>
  <Style {...props} display="block"/>

export const InlineBlock = (props) =>
  <Style {...props} display="inline-block"/>

export const Table = (props) =>
  <Style {...props} display="table"/>

export const TableRow = (props) =>
  <Style {...props} display="table-row"/>

export const TableCell = (props) =>
  <Style {...props} display="table-cell"/>

export const Flex = (props) =>
  <Style {...props} display="flex"/>
