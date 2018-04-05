
const electron = require('electron');
const ipcMain = require('./api/ipc-main');
electron.ipcMain = ipcMain;

electron.BrowserWindow = require("./../browser/api/browser-window");

var App = require("./../browser/api/app").App;
electron.app = new App();

const EventEmitter = require('events').EventEmitter;
Object.setPrototypeOf(App.prototype, EventEmitter.prototype);

const MenuItem = require('./api/menu-item');
electron.MenuItem = MenuItem;

const Menu = require('./api/menu');
electron.Menu = Menu;

const isPromise = require('./../common/api/is-promise').isPromise;
electron.isPromise = isPromise;

const dialog = require('./api/dialog').dialog;
electron.dialog = dialog;

electron.shell = require("./../common/api/shell").Shell;
electron.screen = require("./../common/api/screen").Screen;

function SystemPreferences () {}
SystemPreferences.prototype.isDarkMode = function() { return false; }
SystemPreferences.prototype.isSwipeTrackingFromScrollEventsEnabled = function() { return false; }
SystemPreferences.prototype.isAeroGlassEnabled = function() { return false; }
SystemPreferences.prototype.isInvertedColorScheme = function() { return false; }
Object.setPrototypeOf(SystemPreferences.prototype, EventEmitter.prototype);
electron.systemPreferences = new SystemPreferences();
////////////////////////////////////////////////////////////////

function Protocol() {}

Protocol.prototype.registerStandardSchemes = function(schemes) {}
Protocol.prototype.registerServiceWorkerSchemes = function(scheme) {}
Protocol.prototype.registerFileProtocol = function(scheme, handler, completion) {}
Protocol.prototype.registerBufferProtocol = function(scheme, handler, completion) {}
Protocol.prototype.registerStringProtocol = function(scheme, handler, completion) {}
Protocol.prototype.registerHttpProtocol = function(scheme, handler, completion) {}
Protocol.prototype.unregisterProtocol = function(scheme, completion) {}
Protocol.prototype.isProtocolHandled = function(scheme, callback) {}
Protocol.prototype.interceptFileProtocol = function(scheme, handler, completion) {}
Protocol.prototype.interceptStringProtocol = function(scheme, handler, completion) {}
Protocol.prototype.interceptBufferProtocol = function(scheme, handler, completion) {}
Protocol.prototype.interceptHttpProtocol = function(scheme, handler, completion) {}
Protocol.prototype.uninterceptProtocol = function(scheme, completion) {}

electron.protocol = new Protocol();
////////////////////////////////////////////////////////////////

function AutoUpdater() {}
AutoUpdater.prototype.on = function(evt, callback) {}
AutoUpdater.prototype.setFeedURL= function(url) {}
AutoUpdater.prototype.checkForUpdates = function() {}
AutoUpdater.prototype.quitAndInstall = function() {}

electron.autoUpdater = new AutoUpdater();
////////////////////////////////////////////////////////////////
function Tray() {}
Tray.prototype.on = function(evt, callback) {}
Tray.prototype.destroy = function() {}
Tray.prototype.setImage= function(image) {}
Tray.prototype.setPressedImage = function(image) {}
Tray.prototype.setToolTip = function(toolTip) {}
Tray.prototype.setTitle = function(title) {}
Tray.prototype.displayBalloon = function(options) {}
Tray.prototype.popUpContextMenu = function(menu, position) {}
Tray.prototype.setContextMenu = function(menu) {}

electron.Tray = Tray;
////////////////////////////////////////////////////////////////
function GlobalShortcut() {}
GlobalShortcut.prototype.register = function(accelerator, callback) {}
GlobalShortcut.prototype.isRegistered = function(accelerator) { return true; }
GlobalShortcut.prototype.unregister= function() {}
GlobalShortcut.prototype.unregisterAll = function() {}
electron.globalShortcut = new GlobalShortcut();
////////////////////////////////////////////////////////////////

module.exports = electron;

