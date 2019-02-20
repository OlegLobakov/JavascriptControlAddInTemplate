using System.Windows.Forms;
using Microsoft.Dynamics.Framework.UI.Extensibility;

namespace JavascriptControlAddIn
{
    [ControlAddInExport("JavascriptControlAddIn")]
    public interface IHostControl
    {
        [ApplicationVisible]
        event MethodInvoker ControlAddIsReady;

        [ApplicationVisible]
        event MethodInvoker ControlAddRefresh;

        [ApplicationVisible]
        event MethodInvoker ControlAddRecreate;

        [ApplicationVisible]
        event DataEventHandler OnError;

        [ApplicationVisible]
        void Update();

        [ApplicationVisible]
        event DataEventHandler OnUpdate;
    }
}
