var JitsiPlugin = (function (exports, core) {
    'use strict';

    const Jitsi$1 = core.registerPlugin('Jitsi', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.JitsiWeb()),
    });

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    class JitsiWeb extends core.WebPlugin {
        // @ts-ignore
        joinConference(options) {
            return __awaiter(this, void 0, void 0, function* () {
                throw this.unavailable('the web implementation is not available. Please use Jitsi Meet API to implement Jitsi in web app');
            });
        }
        ;
        // @ts-ignore
        leaveConference(options) {
            return __awaiter(this, void 0, void 0, function* () {
                throw this.unavailable('the web implementation is not available. Please use Jitsi Meet API to implement Jitsi in web app');
            });
        }
        ;
    }
    const Jitsi = new JitsiWeb();

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        JitsiWeb: JitsiWeb,
        Jitsi: Jitsi
    });

    exports.Jitsi = Jitsi$1;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
