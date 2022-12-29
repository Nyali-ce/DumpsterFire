const mediaController = require('node-media-controller');
const request = require('request');

const executeCommand = (command: string) => {
    mediaController.executeCommand(command, (err: Error) => {
        if (err) {
            console.error(err);
        }
    });
}

module.exports = {
    handler: (ipcMain: any, win: any, app: any, exec: any) => {
        ipcMain.handle('sleep', () => {
            exec("powershell (Add-Type '[DllImport(\\\"user32.dll\\\")]^public static extern int SendMessage(int hWnd, int hMsg, int wParam, int lParam);' -Name a -Pas)::SendMessage(-1, 0x0112, 0xF170, 2)");
        })
        ipcMain.handle('league', () => {
            exec("\"A:/Games/Riot Games/Riot Client/RiotClientServices.exe\" --launch-product=league_of_legends --launch-patchline=live");
        })
        ipcMain.handle('youtube', () => {
            exec("start https://www.youtube.com");
        })
        ipcMain.handle('roblox', () => {
            exec("start https://www.roblox.com");
        })
        ipcMain.handle('minecraft', () => {
            exec("\"C:\\Program Files (x86)\\Minecraft Launcher\\MinecraftLauncher.exe\"");
            // exec("\"C:\\Users\\shado\\AppData\\Local\\Programs\\lunarclient\\Lunar Client.exe\"")
        })
        ipcMain.handle('last', () => {
            executeCommand('previous');
        })
        ipcMain.handle('play', () => {
            executeCommand('play');
        })
        ipcMain.handle('next', () => {
            executeCommand('next');
        })
        ipcMain.handle('volume', async (event: any, ...args: any[]) => {
            request.put("https://api.spotify.com/v1/me/player/volume", {
                headers: {
                },
                body: JSON.stringify({
                    "volume_percent": args[0]
                })
            }).on('error', (err: Error) => {
                console.error(err);
            });
        });
        ipcMain.handle('minimize', () => {
            win.minimize();
        })
        ipcMain.handle('exit', () => {
            app.quit();
        })

    }
}