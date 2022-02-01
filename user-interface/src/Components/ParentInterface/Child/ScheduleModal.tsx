import { ISchedule } from "../../InterfaceRepository/ISchedule";
import { Modal } from "../../Modal/Modal";

interface ChildModalProps {
  hide: () => void;
  schedule: ISchedule | undefined;
}

export const ScheduleModal = ({ hide, schedule }: ChildModalProps) => {
  schedule?.periods?.sort((a, b) => a.slot.localeCompare(b.slot));

  const days = ["E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte"];

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
          {days.map((day) => {
            return (
              <tr>
                <td>{day}</td>
                {schedule?.periods?.map((period) => {
                  return (
                    period.dayOfTheWeek === day && (
                      <td>{period.subjectsTeacher?.subject?.subjectName}</td>
                    )
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Modal>
  );
};
