import { GetDate, GetDayOfWeek } from "../../../Util";
import { IRemark } from "../../InterfaceRepository/IRemark";
import { Modal } from "../../Modal/Modal";

interface ChildModalProps {
  hide: () => void;
  remarks: IRemark[];
}

export const RemarkModal = ({ hide, remarks }: ChildModalProps) => {
  if (remarks.length === 0) return <h2>Nuk ka vërejtje!</h2>;
  return (
    <Modal hide={hide}>
      {remarks?.map((remark) => {
        return (
          <article className="remark">
            <div>
              <h3>{GetDate(remark.dateMarked)}</h3>
              <h5>{GetDayOfWeek()}</h5>
              <h3>Ora 1 - Matematikë</h3>
              <h5>
                Ligjëruesi -{" "}
                {remark.teacherNavigation?.teacherNavigation?.name +
                  " " +
                  remark.teacherNavigation?.teacherNavigation?.surname}
              </h5>
            </div>
            <p>{remark.comment}</p>
          </article>
        );
      })}
    </Modal>
  );
};
