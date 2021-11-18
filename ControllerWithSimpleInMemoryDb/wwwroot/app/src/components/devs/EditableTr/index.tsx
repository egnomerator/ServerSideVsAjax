﻿import * as React from "react";
import { TrEditorCell } from "../TrEditorCell";

export interface Dev {
    id: number;
    name: string;
}

interface EditableTrProps {
    dev: Dev;
    view(id: number): void;
    edit(dev: Dev): void;
    delete(id: number): void;
}

interface EditableTrState {
    dev: Dev;
}

export class EditableTr extends React.Component<EditableTrProps, EditableTrState> {
    constructor(props: EditableTrProps) {
        super(props);

        this.handleDevNameChange = this.handleDevNameChange.bind(this);
        this.view = this.view.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);

        this.state = {
            dev: props.dev
        }
    }

    handleDevNameChange(event) {
        const newDev: Dev = {
            id: this.state.dev.id,
            name: event.target.value
        }
        this.setState({ dev: newDev });
    }

    view() {
        this.props.view(this.props.dev.id);
    }
    edit() {
        this.props.edit(this.state.dev);
    }
    delete() {
        this.props.delete(this.props.dev.id);
    }

    render() {
        return <tr>
            <td>{this.props.dev.id}</td>
            <td>
                <input
                    type="text"
                    value={this.state.dev.name}
                    onChange={this.handleDevNameChange}
                />
            </td>
            <TrEditorCell
                view={this.view}
                edit={this.edit}
                delete={this.delete}
            />
        </tr>
    }
}