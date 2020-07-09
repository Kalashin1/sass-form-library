# sass-form-library
This is a simple form library..  It is still in development


there are two type of form.. a normal form which can be created just like below

```
<div class="row">
     <form>
        <div class="input">
            <input type="text" id="name">
            <label for="name">Name</label>
        </div>
        <div class="input">
            <input type="email" id="email">
            <label for="name">Email</label>
        </div>
        <div class="input">
            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            <label for="comment">Comment</label>
        </div>
        <div class="input-button">
            <p><input type="radio" name="sex" value="female" id="this" />
            <label for="this" class="radio">Male sex</label></p>
            <p><input type="radio" name="sex" value="male" id="that" />
            <label for="that" class="radio">Female sex</label></p>
        </div>
        <div class="input-button">
            <input type="checkbox" name="chekbox" id="goat" />
            <label for="goat" class="checkbox">Goat</label>
        </div>
      </form>
</div>

```

the other form style can be applied just like below 

```
  	<div class="row">
                
                <form>
                    <div class="input-one-line">
                          <span class="field-icon">
                            <i class="fas fa-user"></i>
                        </span> 
                        <input type="text" id="name">
                        <label for="name">Name</label>
                    </div>
                    <div class="input-one-line">
                        <span class="field-icon">
                            <i class="fas fa-mail-bulk"></i>
                        </span> 
                        <input type="email" id="email">
                        <label for="name">Email</label>
                    </div>
                    <div class="input-one-line">
                        <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
                        <label for="comment">Comment</label>
                    </div>
                    <div class="input-button">
                        <p><input type="radio" name="protein" value="fish" id="fish-protein" />
                        <label for="fish-protein" class="radio">Fish Protein</label></p>
                        <p><input type="radio" name="protein" value="meat" id="meat-protein" />
                        <label for="meat-protein" class="radio">Meat Protein</label></p>
                    </div>
                    <div class="input-button">
                        <input type="checkbox" name="chekbox" id="sugar" />
                        <label for="sugar" class="checkbox">Sugar</label>
                    </div> 
                </form>
            </div>
    </div>

```

note the .field-icon can be added to only the second style of form and it is an icon from any icon library... font-awesome or material fonts
