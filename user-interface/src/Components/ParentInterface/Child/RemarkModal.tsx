import { Modal } from "../../Modal/Modal";

interface ChildModalProps {
  hide: () => void;
}

export const RemarkModal: React.FunctionComponent<ChildModalProps> = ({
  hide,
}) => {
  return (
    <Modal hide={hide}>
      <article className="absence">
        <div>
          <h2>12 Janar, 2022</h2>
          <h5>E Mërkurë</h5>
        </div>
        <div>
          <h2>Ora 4 - Matematikë</h2>
          <h5>Ligjëruesi Arben Vitija</h5>
        </div>
        <p>Me arsye</p>
      </article>
    </Modal>
  );
};
