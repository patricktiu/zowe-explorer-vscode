/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright Contributors to the Zowe Project.
 *
 */

import { JSXInternal } from "preact/src/jsx";
import PersistentClearAllButton from "./PersistentClearAllButton";
import PersistentRefreshButton from "./PersistentRefreshButton";
import PersistentDropdownOptions from "./PersistentDropdownOptions";
import PersistentAddNewHistoryItemButton from "./PersistentAddNewHistoryItemButton";
import PersistentDeleteSelectedButton from "./PersistentDeleteSelectedButton";
import PersistentSelectAllButton from "./PersistentSelectAllButton";

export default function PersistentToolBar({ handleChange }: { handleChange: Function }): JSXInternal.Element {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <PersistentDropdownOptions handleChange={handleChange} />
      <PersistentRefreshButton />
      <PersistentClearAllButton />
      <PersistentAddNewHistoryItemButton />
      <PersistentDeleteSelectedButton />
      <PersistentSelectAllButton />
    </div>
  );
}
