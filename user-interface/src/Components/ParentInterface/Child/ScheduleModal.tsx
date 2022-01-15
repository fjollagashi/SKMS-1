import { Modal } from "../../Modal/Modal";

interface ChildModalProps {
  hide: () => void;
}

export const ScheduleModal: React.FunctionComponent<ChildModalProps> = ({
  hide,
}) => {
  return (
    <Modal hide={hide}>
      <table id="Schedule">
        <thead>
          <tr>
            <td></td>
            <td>ORA 1</td>
            <td>ORA 2</td>
            <td>ORA 3</td>
            <td>ORA 4</td>
            <td>ORA 5</td>
            <td>ORA 6</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>E HËNË</td>
            <td>ORA E PARË</td>
            <td>ORA E DYTË</td>
            <td>ORA E TRETË</td>
            <td>ORA E KATËRT</td>
            <td>ORA E PESTË</td>
            <td>ORA E GJASHTË</td>
          </tr>
          <tr>
            <td>E MARTË</td>
            <td>ORA E PARË</td>
            <td>ORA E DYTË</td>
            <td>ORA E TRETË</td>
            <td>ORA E KATËRT</td>
            <td>ORA E PESTË</td>
            <td>ORA E GJASHTË</td>
          </tr>
          <tr>
            <td>E MËRKURË</td>
            <td>ORA E PARË</td>
            <td>ORA E DYTË</td>
            <td>ORA E TRETË</td>
            <td>ORA E KATËRT</td>
            <td>ORA E PESTË</td>
            <td>ORA E GJASHTË</td>
          </tr>
          <tr>
            <td>E ENJTE</td>
            <td>ORA E PARË</td>
            <td>ORA E DYTË</td>
            <td>ORA E TRETË</td>
            <td>ORA E KATËRT</td>
            <td>ORA E PESTË</td>
            <td>ORA E GJASHTË</td>
          </tr>
          <tr>
            <td>E PREMTE</td>
            <td>ORA E PARË</td>
            <td>ORA E DYTË</td>
            <td>ORA E TRETË</td>
            <td>ORA E KATËRT</td>
            <td>ORA E PESTË</td>
            <td>ORA E 6-TË</td>
          </tr>
        </tbody>
      </table>
    </Modal>
  );
};
