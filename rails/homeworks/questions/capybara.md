# Testing Rails With RSpec and Capybara

Today we'll be testing the Reddit Clone you created yesterday. Use your code from yesterday's assignment.

## Setup

Follow the instructions for setting up [RSpec-Rails][rspec-rails], [Shoulda Matchers][shoulda-matchers-docs], and [Capybara][capybara]. (Note: no need to use Factory Girl or Faker for this assignment - we'll save that for tomorrow.)

Note: if you're having difficulty getting your config to work, don't hesitate to check out the `spec_helper.rb`, `Gemfile`, and specs from the solutions.

Run `rails generate rspec:model User` to generate spec files for the `User` model.

## Model Tests

Let's write some simple tests for the `User` model. Your test files should live in `spec/models/user_spec.rb`. Use shoulda-matchers to test all of the user's validations and associations, using the following as a blueprint:

```ruby
  # validations
  it { should validate_presence_of(:name) }

  # associations
  it { should have_many(:subs) }
```

You should validate:
* Presence of `name`
* Presence of `password_digest`
* Length of `password` > 6

You should test the following associations:
* `has_many :subs`
* `has_many :user_votes`
* `has_many :comments`

Refer to [the docs][shoulda-matchers-docs] as needed.

Next, it's time for a review of plain old RSpec! Write methods to test `#is_password?`, `#reset_session_token`, and `::find_by_credentials`.

Make sure to run your specs (`bundle exec rspec spec/models`) and [review the solutions][users-solutions] for the users model before moving on.

## Integration Tests

Next, it's time to practice writing an integration test.

Your integration tests should live in the `spec/features/` folder. Create a new file in this folder called `auth_spec.rb`.

Copy in the following skeleton and implement the pending specs to test your auth pattern. Refer to the [Capybara reading][capybara] as needed.

**Note:** Capybara is a very picky creature. When Capybara is instructed to do something like `fill_in 'username'`, Capybara will only execute the command correctly if the label is "username" exactly, case sensitive. Make sure that the text on your labels, forms, and headers are exactly as Capybara expects below.

```ruby
feature "the signup process" do

  scenario "has a new user page" do
    visit new_user_url
    expect(page).to have_content "New user"
  end

  feature "signing up a user" do
    before(:each) do
      visit new_user_url
      fill_in 'username', :with => "testing_username"
      fill_in 'password', :with => "biscuits"
      click_on "Create User"
    end

    scenario "redirects to subs index page after signup"

    scenario "shows username on the homepage after signup"

    scenario "re-renders the signup page if an invalid user is given"
  end

end
```

Congrats! You are on your way to becoming a master of Capybara! Make sure to review the solutions.

[rspec-rails]: ../../readings/rspec-and-rails-setup.md
[shoulda-matchers]: ../../readings/shoulda-matchers.md
[shoulda-matchers-docs]: https://github.com/thoughtbot/shoulda-matchers
[capybara]: ../../readings/capybara.md
[users-solutions]: ../../projects/reddit_on_rails/solution/spec/models/user_spec.rb
