import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  // ngOnInit(): void {
    currentNumber = '0';
    firstOperand = 0;
    operator = 0;
    waitForSecondNumber = false;
  
    public getNumber(v: string){
      console.log(v);
      if(this.waitForSecondNumber)
      {
        this.currentNumber = v;
        this.waitForSecondNumber = false;
      }else{
        this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
  
      }
    }
  
    getDecimal(){
      if(!this.currentNumber.includes('.')){
          this.currentNumber += '.'; 
      }
    }
  
    public doCalculation(op: any , secondOp: any){
      switch (op){
        case '+':
        return this.firstOperand += secondOp; 
        case '-': 
        return this.firstOperand -= secondOp; 
        case '*': 
        return this.firstOperand *= secondOp; 
        case '/': 
        return this.firstOperand /= secondOp; 
        case '=':
        return secondOp;
      }
    }
    
  
    public getOperation(op: any){
      console.log(op);
  
      if(this.firstOperand === null){
        this.firstOperand = Number(this.currentNumber);
  
      }else if(this.operator){
        const result = this.doCalculation(this.operator , Number(this.currentNumber))
        this.currentNumber = String(result);
        this.firstOperand = result;
      }
      this.operator = op;
      this.waitForSecondNumber = true;
  
      console.log(this.firstOperand);
  
    }
  
    public clear(){
      this.currentNumber = '0';
      this.firstOperand = 0;
      this.operator = 0;
      this.waitForSecondNumber = false;
    }
  }

