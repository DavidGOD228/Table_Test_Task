import React from "react";
import {AutoSizer, Column, Table} from "react-virtualized";

const COLUMN_COUNT = 5;


export const TableComponent = ({list}) =>  {
    return (
      <AutoSizer>
        {({width}) => (

          <Table
            width={width}
            height={window.innerHeight}
            headerHeight={20}
            rowHeight={30}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
          >
            <Column
              headerRenderer={this.headerRenderer}
              dataKey="name"
              label="Name"
              width={width / COLUMN_COUNT}
            />
            <Column
              headerRenderer={this.headerRenderer}
              dataKey="location"
              label="Location"
              width={width / COLUMN_COUNT}
            />
            <Column
              dataKey="description"
              label="Description"
              width={width / COLUMN_COUNT}
            />
            <Column
              dataKey="job"
              label="Job"
              width={width / COLUMN_COUNT}
            />
            <Column
              dataKey="jobType"
              label="Job Type"
              width={width / COLUMN_COUNT}
            />
          </Table>
        )}
      </AutoSizer>

    )
  }

