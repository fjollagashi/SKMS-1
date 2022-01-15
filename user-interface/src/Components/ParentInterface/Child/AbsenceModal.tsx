import { Modal } from "../../Modal/Modal";

interface ChildModalProps {
  hide: () => void;
}

export const AbsenceModal: React.FunctionComponent<ChildModalProps> = ({
  hide,
}) => {
  return (
    <Modal hide={hide}>
      <article className="remark">
        <div>
          <h3>22 Janar, 2022</h3>
          <h5>E Hënë</h5>
          <h3>Ora 1 - Matematikë</h3>
          <h5>Ligjëruesi Arben Vitija</h5>
        </div>
        <p>
          Altina nuk ka mbajtur qetësinë si duhet, dhe ka komunikuar me shoqe
          kur ka qenë koha e mësimit vetjak.
        </p>
      </article>
    </Modal>
  );
};
