import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idade'
})
export class IdadePipe implements PipeTransform {
  transform(birthDate: string, exitDate?: string, status?: string): string {
    if (status && status.toLowerCase() === 'morto' && exitDate) {
      const [birthYear, birthMonth, birthDay] = birthDate.split('-').map(Number);
      const [exitYear, exitMonth, exitDay] = exitDate.split('-').map(Number);
      const birth = new Date(birthYear, birthMonth - 1, birthDay);
      const exit = new Date(exitYear, exitMonth - 1, exitDay);

      const diffInMilliseconds = Math.abs(exit.getTime() - birth.getTime());
      const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
      const diffInMonths = Math.floor(diffInDays / 30);

      return `${diffInMonths} mês${diffInMonths !== 1 ? 'es' : ''}`;
    }

    const [year, month, day] = birthDate.split('-').map(Number);
    const today = new Date();
    const birth = new Date(year, month - 1, day);

    let ageInMonths = (today.getFullYear() - birth.getFullYear()) * 12;
    ageInMonths -= birth.getMonth();
    ageInMonths += today.getMonth();

    if (today.getDate() < birth.getDate()) {
      ageInMonths--;
    }

    return `${ageInMonths} mês${ageInMonths !== 1 ? 'es' : ''}`;
  }
}
