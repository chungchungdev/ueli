import { PluginRepository } from "./PluginRepository";
import { SearchPlugin } from "../Plugins/SearchPlugin";
import { WindowsApplicationSearchPlugin } from "../Plugins/WindowsApplicationSearchPlugin/WindowsApplicationSearchPlugin";
import { PowershellUtility } from "../Utilities/PowershellUtility";
import { ExecutionContext } from "../../common/ExecutionContext";

export class WindowsPluginRepository extends PluginRepository {
    public constructor(executionContext: ExecutionContext) {
        super(executionContext);
    }

    protected getOperatingSystemSpecificPlugins(): SearchPlugin<unknown>[] {
        return [
            new WindowsApplicationSearchPlugin(this.executionContext, (powershellScript) =>
                PowershellUtility.executePowershellScript(powershellScript)
            ),
        ];
    }
}
