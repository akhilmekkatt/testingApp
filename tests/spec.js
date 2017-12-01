describe('Filters', function() {
   
      beforeEach(module('myTestingApp'));
      
      describe('Filters', function() {

        var reverse;
        beforeEach(inject(function($filter) {             
           
                reverse = $filter('reverse',{});
            }));
        
            it('should reverse', function() {

                expect(reverse('hello')).toBe('olleh');
                expect(reverse('Akhil')).toBe('olleh');                

              });

      });
     
    
  });