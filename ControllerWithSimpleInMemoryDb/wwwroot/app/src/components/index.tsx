﻿import * as React from "react";
import * as ReactDOM from "react-dom";
import { DevsEditor, DevsWebApi } from "./devs/DevsEditor";


function renderDevsEditor(container: Element, devsWebApi: object) {
    const api = devsWebApi as DevsWebApi;
    ReactDOM.render(
        <DevsEditor devsWebApi={api} />,
        container
    )
}

const Components = {
    renderDevsEditor: function (container: Element, devsWebApi: object) { renderDevsEditor(container, devsWebApi); }
}

export default Components;
